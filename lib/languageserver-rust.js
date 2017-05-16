const cp = require("child_process");
const { AutoLanguageClient } = require("atom-languageclient");

class RustLanguageServer extends AutoLanguageClient {
  getGrammarScopes() {
    return ["source.rust"];
  }
  getLanguageName() {
    return "Rust";
  }
  getServerName() {
    return "RLS";
  }

  constructor() {
    super();
    this.statusElement = document.createElement("div");
    this.statusElement.className = "inline-block";
  }

  startServerProcess() {
    const command = "rustup";
    const args = ["run", "nightly", "rls"];

    this.updateStatusBar("Starting up...");
    return cp.spawn(command, args);
  }

  preInitialization(connection) {
    connection.onCustom("rustDocument/diagnosticsBegin", () =>
      this.updateStatusBar("Analyzing...")
    );
    connection.onCustom("rustDocument/diagnosticsEnd", () =>
      this.updateStatusBar("Analysis finished")
    );
  }

  updateStatusBar(text) {
    this.statusElement.textContent = `${this.name} ${text}`;
  }

  consumeStatusBar(statusBar) {
    this.statusTile = statusBar.addLeftTile({
      item: this.statusElement,
      priority: 1000
    });
  }
}

module.exports = new RustLanguageServer();
