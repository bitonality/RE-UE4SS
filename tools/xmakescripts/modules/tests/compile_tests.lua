import("core.project.project")
import("core.base.task")

function compilation_test(configs)
    print(configs)
    os.exit()
    local modes = project.allowed_modes():to_array()
    -- Import parameter option module
    import("core.base.option")

    local errors = {}
    for _, mode in ipairs(modes) do
        print(mode)
        local _, error =_build_mode(mode)
        if error then
            errors[mode] = error
        end
    end
    
    if errors then
        for mode, error in pairs(errors) do
            print(mode)
            print(error)
        end

        raise("Compilation errors! See above output for details.")
    end
end

function _build_mode(mode)
    local errs = nil
    return try
    {
        function ()
            task.run("config", {mode = mode, confirm=true})
            task.run("clean")
            task.run("build", {rebuild = true})
        end,
        catch
        {
            function (errors)
                errs = errors
            end
        }
    }, errs
end