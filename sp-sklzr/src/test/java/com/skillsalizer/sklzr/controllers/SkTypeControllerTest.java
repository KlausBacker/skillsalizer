package com.skillsalizer.sklzr.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.skillsalizer.sklzr.entities.Consultant;
import com.skillsalizer.sklzr.entities.SkType;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringJUnit4ClassRunner.class)
class SkTypeControllerTest {
    @Autowired
    private MockMvc mockMvc;
//    @InjectMocks
//    private SkTypeController skTypeController;

    @BeforeEach
    void setUp() throws Exception {

    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void postSktype() {
    }

    @Test
    void updateSktype() {
    }

    @Test
    void getSktypeById() {

    }

    @Test
    void getAllsktypes() throws Exception {

    }

    @Test
    void deleteSktypeById() {
    }


}
