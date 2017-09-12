# languageserver-rust package

[![Greenkeeper badge](https://badges.greenkeeper.io/aergonaut/languageserver-rust.svg)](https://greenkeeper.io/)

Adds support for the [Rust Language Server][1] to [Atom][2].

**Caveat lector:** This package is still in development! It might not work in
some places and there's probably a lot of missing functionality! Please keep
that in mind if you decide to try it out!

## Setting up

### Install RLS

The recommended way to install RLS is with rustup. Please follow
[these steps](https://github.com/rust-lang-nursery/rls#setup) to install RLS to
your system.

If RLS is not installed when you install this extension, the extension will show
an error and not activate. You need to restart Atom after installing RLS for the
extension to recognize it.

### Install Nuclide

languageserver-rust depends on [Nuclide][3] for a lot of its functionality. You
should install Nuclide for the best experience.

## License

Licensed under either of

*   Apache License, Version 2.0 ([LICENSE-APACHE](LICENSE-APACHE) or
    <http://www.apache.org/licenses/LICENSE-2.0>)
*   MIT license ([LICENSE-MIT](LICENSE-MIT) or
    <http://opensource.org/licenses/MIT>)

at your option.

### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted
for inclusion in the work by you, as defined in the Apache-2.0 license, shall be
dual licensed as above, without any additional terms or conditions.

[1]: https://github.com/rust-lang-nursery/rls
[2]: https://atom.io
[3]: https://nuclide.io
