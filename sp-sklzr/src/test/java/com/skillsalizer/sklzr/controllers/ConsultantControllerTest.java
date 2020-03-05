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
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(ConsultantController.class)
class ConsultantControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @InjectMocks
    private Consultant consultant;

    @BeforeEach
    public void setUp() throws Exception {
        this.mockMvc = MockMvcBuilders.standaloneSetup(consultant).build();
    }


    @AfterEach
    void tearDown() {
    }

    @Test
    void postConsultant() throws Exception {
    }


    @Test
    void updateConsultant() {
    }

    @Test
    void getConsultantById() throws Exception {

    }

    @Test
    void getAllconsultants() {
    }

    @Test
    void deleteConsultantById() {
    }


}
