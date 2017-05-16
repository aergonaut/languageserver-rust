'use babel';

import LanguageserverRust from '../lib/languageserver-rust';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('LanguageserverRust', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('languageserver-rust');
  });

  describe('when the languageserver-rust:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.languageserver-rust')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'languageserver-rust:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.languageserver-rust')).toExist();

        let languageserverRustElement = workspaceElement.querySelector('.languageserver-rust');
        expect(languageserverRustElement).toExist();

        let languageserverRustPanel = atom.workspace.panelForItem(languageserverRustElement);
        expect(languageserverRustPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'languageserver-rust:toggle');
        expect(languageserverRustPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.languageserver-rust')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'languageserver-rust:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let languageserverRustElement = workspaceElement.querySelector('.languageserver-rust');
        expect(languageserverRustElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'languageserver-rust:toggle');
        expect(languageserverRustElement).not.toBeVisible();
      });
    });
  });
});
