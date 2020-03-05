package com.skillsalizer.sklzr.controllers;

import com.skillsalizer.sklzr.entities.SkLevel;
import com.skillsalizer.sklzr.entities.SkType;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringJUnit4ClassRunner.class)
class SkLevelControllerTest {
    private MockMvc mockMvc;
    @InjectMocks
    private SkLevelController skLevelController;

    @BeforeEach
    void setUp() throws Exception {
        this.mockMvc = MockMvcBuilders.standaloneSetup(skLevelController).build();
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void postSklevel() {
    }

    @Test
    void updateSklevel() {
    }

    @Test
    void getSklevelById() {
    }

    @Test
    void getAllsklevels() {
    }

    @Test
    void deleteSklevelById() {
    }
}
