(function() {var implementors = {};
implementors["bytes"] = [{"text":"impl&lt;B:&nbsp;<a class=\"trait\" href=\"bytes/buf/trait.Buf.html\" title=\"trait bytes::buf::Buf\">Buf</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"sgx_tstd/io/trait.Read.html\" title=\"trait sgx_tstd::io::Read\">Read</a> for <a class=\"struct\" href=\"bytes/buf/ext/struct.Reader.html\" title=\"struct bytes::buf::ext::Reader\">Reader</a>&lt;B&gt;","synthetic":false,"types":["bytes::buf::ext::reader::Reader"]}];
implementors["protected_fs"] = [{"text":"impl <a class=\"trait\" href=\"sgx_tstd/io/trait.Read.html\" title=\"trait sgx_tstd::io::Read\">Read</a> for <a class=\"struct\" href=\"protected_fs/struct.ProtectedFile.html\" title=\"struct protected_fs::ProtectedFile\">ProtectedFile</a>","synthetic":false,"types":["protected_fs::protected_fs::ProtectedFile"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"sgx_tstd/io/trait.Read.html\" title=\"trait sgx_tstd::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"protected_fs/struct.ProtectedFile.html\" title=\"struct protected_fs::ProtectedFile\">ProtectedFile</a>","synthetic":false,"types":["protected_fs::protected_fs::ProtectedFile"]}];
implementors["rand_core"] = [{"text":"impl <a class=\"trait\" href=\"sgx_tstd/io/trait.Read.html\" title=\"trait sgx_tstd::io::Read\">Read</a> for dyn <a class=\"trait\" href=\"rand_core/trait.RngCore.html\" title=\"trait rand_core::RngCore\">RngCore</a>","synthetic":false,"types":["rand_core::RngCore"]}];
implementors["rustls"] = [{"text":"impl&lt;'a, S, T&gt; <a class=\"trait\" href=\"sgx_tstd/io/trait.Read.html\" title=\"trait sgx_tstd::io::Read\">Read</a> for <a class=\"struct\" href=\"rustls/struct.Stream.html\" title=\"struct rustls::Stream\">Stream</a>&lt;'a, S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: 'a + <a class=\"trait\" href=\"rustls/trait.Session.html\" title=\"trait rustls::Session\">Session</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: 'a + <a class=\"trait\" href=\"sgx_tstd/io/trait.Read.html\" title=\"trait sgx_tstd::io::Read\">Read</a> + <a class=\"trait\" href=\"sgx_tstd/io/trait.Write.html\" title=\"trait sgx_tstd::io::Write\">Write</a>,&nbsp;</span>","synthetic":false,"types":["rustls::stream::Stream"]},{"text":"impl&lt;S, T&gt; <a class=\"trait\" href=\"sgx_tstd/io/trait.Read.html\" title=\"trait sgx_tstd::io::Read\">Read</a> for <a class=\"struct\" href=\"rustls/struct.StreamOwned.html\" title=\"struct rustls::StreamOwned\">StreamOwned</a>&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"rustls/trait.Session.html\" title=\"trait rustls::Session\">Session</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"sgx_tstd/io/trait.Read.html\" title=\"trait sgx_tstd::io::Read\">Read</a> + <a class=\"trait\" href=\"sgx_tstd/io/trait.Write.html\" title=\"trait sgx_tstd::io::Write\">Write</a>,&nbsp;</span>","synthetic":false,"types":["rustls::stream::StreamOwned"]},{"text":"impl <a class=\"trait\" href=\"sgx_tstd/io/trait.Read.html\" title=\"trait sgx_tstd::io::Read\">Read</a> for <a class=\"struct\" href=\"rustls/struct.ServerSession.html\" title=\"struct rustls::ServerSession\">ServerSession</a>","synthetic":false,"types":["rustls::server::ServerSession"]},{"text":"impl <a class=\"trait\" href=\"sgx_tstd/io/trait.Read.html\" title=\"trait sgx_tstd::io::Read\">Read</a> for <a class=\"struct\" href=\"rustls/struct.ClientSession.html\" title=\"struct rustls::ClientSession\">ClientSession</a>","synthetic":false,"types":["rustls::client::ClientSession"]}];
implementors["sgx_tstd"] = [];
implementors["snap"] = [{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"sgx_tstd/io/trait.Read.html\" title=\"trait sgx_tstd::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"sgx_tstd/io/trait.Read.html\" title=\"trait sgx_tstd::io::Read\">Read</a> for <a class=\"struct\" href=\"snap/struct.Reader.html\" title=\"struct snap::Reader\">Reader</a>&lt;R&gt;","synthetic":false,"types":["snap::frame::Reader"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()