echo "codesandbox doesnt persist rust after reload or server restart."

# install rust elsewhere
echo "installing rustup!"
curl https://sh.rustup.rs -sSf | RUSTUP_HOME=/sandbox/bin/rustup sh -s -- -y --default-toolchain stable

source $HOME/.cargo/env
# setup rust 
export RUSTUP_HOME=/sandbox/bin/rustup rustup default stable

chown -R sandbox ~/.cargo/

export RUSTUP_HOME=/sandbox/bin/rustup
export PATH=~/.cargo/bin:$PATH
export RUST_SRC_PATH="$(rustc --print sysroot)/lib/rustlib/src/rust/src"

# You might have to run this yourself :/
echo "install rust stable"
rustup install stable
echo "set stable as default"
rustup default stable

trap 'echo "please open a new tab! to use rustup / cargo / wasm-pack"' 0