target("patternsleuth_bind")
    set_kind("static")
    set_values("rust.cratetype", "staticlib")
    add_files("src/lib.rs")
    add_deps("patternsleuth")
    add_rules("rust.link")