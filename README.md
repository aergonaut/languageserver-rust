# languageserver-rust package

Adds support for the [Rust Language Server][1] to [Atom][2].

[1]: https://github.com/rust-lang-nursery/rls
[2]: https://atom.io

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

### Package dependencies

languageserver-rust requires the following packages to be installed in order to
have full functionality:

*   [Nuclide](https://atom.io/packages/nuclide)
*   [Linter](https://atom.io/packages/linter)

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
