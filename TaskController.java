package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Task;
import com.example.demo.repository.TaskRepository;

@RestController
@RequestMapping("/tasks")
@CrossOrigin("*")
public class TaskController {

    @Autowired
    private TaskRepository repository;

    @GetMapping
    public List<Task> getTasks() {
        return repository.findAll();
    }

    @PostMapping
    public Task addTask(@RequestBody Task task) {
        return repository.save(task);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
