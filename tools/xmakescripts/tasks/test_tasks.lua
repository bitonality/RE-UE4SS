task("compilation_test")

    -- Set the run script
    on_run(function() 
        import("tests.compile_tests")
        import("core.base.option")
        compile_tests.compilation_test(option.get("configs"))
    end)

    set_category("CI Test")
    -- Set the command line options for the plugin. There are no parameter options here, just the plugin description.
    set_menu {
                -- Settings menu usage
                usage = "xmake compilation_test [config options]"
                -- Setup menu description
            ,   description = "Test if the specified modes compile successfully."
                -- Set menu options, if there are no options, you can set it to {}
            ,   options =
                {
                    {nil, "configs", "vs", nil, "Configuration options to pass to each build invocation." },
                    {nil, "bitches", "vs", nil, "Configuration options to pass to each build invocation." }
                }
            }