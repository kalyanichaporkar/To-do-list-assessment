@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class TaskController {
    @Autowired
    private TaskService service;

    @GetMapping("/tasks")
    public List<Task> getTasks() { return service.getAllTasks(); }

    @PostMapping("/task")
    public Task addTask(@RequestBody Task task) { return service.createTask(task); }

    @PutMapping("/task/{id}")
    public Task updateTask(@PathVariable int id, @RequestBody Task task) {
        return service.updateTask(id, task);
    }

    @DeleteMapping("/task/{id}")
    public void deleteTask(@PathVariable int id) { service.deleteTask(id); }
}
