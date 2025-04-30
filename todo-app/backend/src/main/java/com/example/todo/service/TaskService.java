@Service
public class TaskService {
    @Autowired
    private TaskRepository repository;

    public List<Task> getAllTasks() { return repository.findAll(); }
    public Task createTask(Task task) { return repository.save(task); }
    public Task updateTask(int id, Task task) {
        task.setId(id);
        return repository.save(task);
    }
    public void deleteTask(int id) { repository.deleteById(id); }
}
