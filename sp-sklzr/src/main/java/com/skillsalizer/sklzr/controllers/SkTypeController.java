package com.skillsalizer.sklzr.controllers;

import com.skillsalizer.sklzr.entities.SkType;
import com.skillsalizer.sklzr.services.SkTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class SkTypeController {

    private SkTypeService skTypeService;

    @Autowired
    public SkTypeController(SkTypeService skTypeService){this.skTypeService=skTypeService;}

    //persist a new SkType using the Service's "saveSktype()" function
    @PostMapping("sktype")
    public ResponseEntity<SkType> postSktype(@RequestBody SkType s){
        return new ResponseEntity<>(this.skTypeService.saveSktype(s),
                HttpStatus.CREATED);
    }
    //Update an SkType using the Service's "updateSktype()" function
    @PutMapping("sktype/{id}")
    public ResponseEntity<SkType> updateSktype(@RequestBody SkType s) {
        return new ResponseEntity<>(this.skTypeService.updateSktype(s),
                HttpStatus.OK);
    }
    //Get an SkType by is ID using the Service's "getSktypeById()" function
    @GetMapping("sktype/{id}")
    public ResponseEntity<SkType> getSktypeById(@PathVariable Long id) {
        return new ResponseEntity<>(this.skTypeService.getSktypeById(id).orElse(null),
                HttpStatus.OK);
    }
    //Get all the SkTypes using the Service's "getAllSktypes()" function
    @GetMapping("sktypes/")
    public ResponseEntity<Iterable<SkType>> getAllsktypes() {
        return new ResponseEntity<>(this.skTypeService.getAllSktypes(),
                HttpStatus.OK);
    }
    //Delete an SkType by is ID using the Service's "deleteSktypeById()" function
    @DeleteMapping("sktype/{id}")
    public ResponseEntity<Void> deleteSktypeById(@PathVariable Long id) {
        this.skTypeService.deleteSktypeById(id);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }


}
