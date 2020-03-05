package com.skillsalizer.sklzr.controllers;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringJUnit4ClassRunner.class)
class SkillControllerTest {
    private MockMvc mockMvc;
    @InjectMocks
    private SkillController skillController;

    @BeforeEach
    void setUp() throws Exception {
        this.mockMvc = MockMvcBuilders.standaloneSetup(skillController).build();
    }

    @Test
    void postSkill() {
    }

    @Test
    void updateSkill() {
    }

    @Test
    void getSkillById() {
    }

    @Test
    void getAllskills() {
    }

    @Test
    void deleteSkillById() {
    }
}
