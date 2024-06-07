import("core.project.project")
import("core.base.json")

function main()
    local jsonString = json.encode(project.modes())
    io.write(jsonString)
end