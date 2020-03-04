package com.skillsalizer.sklzr.controllers;

import com.skillsalizer.sklzr.entities.Consultant;
import com.skillsalizer.sklzr.services.ConsultantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ConsultantController {

    private ConsultantService consultantService;

    @Autowired
    public ConsultantController(ConsultantService consultantService) {
        this.consultantService = consultantService;
    }

    //persist a new Consultant using the Service's "saveConsultant()" function
    @PostMapping("consultant")
    public ResponseEntity<Consultant> postConsultant(@RequestBody Consultant c) {
        return new ResponseEntity<>(this.consultantService.saveConsultant(c),
                HttpStatus.CREATED);
    }

    //Update an Consultant using the Service's "updateConsultant()" function
    @PutMapping("consultant/{id}")
    public ResponseEntity<Consultant> updateConsultant(@RequestBody Consultant c) {
        return new ResponseEntity<>(this.consultantService.updateConsultant(c),
                HttpStatus.OK);
    }

    //Get an Consultant by is ID using the Service's "getConsultantById()" function
    @GetMapping("consultant/{id}")
    public ResponseEntity<Consultant> getConsultantById(@PathVariable Long id) {
        return new ResponseEntity<>(this.consultantService.getConsultantById(id).orElse(null),
                HttpStatus.OK);
    }

    //Get all the Consultants using the Service's "getAllConsultants()" function
    @GetMapping("consultants/")
    public ResponseEntity<Iterable<Consultant>> getAllconsultants() {
        return new ResponseEntity<>(this.consultantService.getAllConsultants(),
                HttpStatus.OK);
    }

    //Delete an Consultant by is ID using the Service's "deleteConsultantById()" function
    @DeleteMapping("consultant/{id}")
    public ResponseEntity<Void> deleteConsultantById(@PathVariable Long id) {
        this.consultantService.deleteConsultantById(id);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

}
