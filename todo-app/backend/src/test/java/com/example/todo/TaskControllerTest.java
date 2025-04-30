@SpringBootTest
@AutoConfigureMockMvc
public class TaskControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testGetTasks() throws Exception {
        mockMvc.perform(get("/api/tasks"))
            .andExpect(status().isOk());
    }
}
