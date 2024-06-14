import("core.project.config")
import("core.project.project")
import("core.base.json")

function main() 
    config.load()
    
    local targets = {}
    for targetname, target in pairs(project.targets()) do
        targets[targetname] = {target = target:targetfile(), symbol = target:symbolfile()}
    end

    local jsonString = json.encode(targets)
    io.write(jsonString)
end