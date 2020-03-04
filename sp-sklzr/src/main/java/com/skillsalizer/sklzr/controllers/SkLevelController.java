package com.skillsalizer.sklzr.controllers;

import com.skillsalizer.sklzr.entities.SkLevel;
import com.skillsalizer.sklzr.services.SkLevelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class SkLevelController {

    private SkLevelService skLevelService;

    @Autowired
    public SkLevelController(SkLevelService skLevelService){this.skLevelService=skLevelService;}

    //persist a new SkLevel using the Service's "saveSklevel()" function
    @PostMapping("sklevel")
    public ResponseEntity<SkLevel> postSklevel(@RequestBody SkLevel s){
        return new ResponseEntity<>(this.skLevelService.saveSklevel(s),
                HttpStatus.CREATED);
    }
    //Update an SkLevel using the Service's "updateSklevel()" function
    @PutMapping("sklevel/{id}")
    public ResponseEntity<SkLevel> updateSklevel(@RequestBody SkLevel s) {
        return new ResponseEntity<>(this.skLevelService.updateSklevel(s),
                HttpStatus.OK);
    }
    //Get an SkLevel by is ID using the Service's "getSklevelById()" function
    @GetMapping("sklevel/{id}")
    public ResponseEntity<SkLevel> getSklevelById(@PathVariable Long id) {
        return new ResponseEntity<>(this.skLevelService.getSklevelById(id).orElse(null),
                HttpStatus.OK);
    }
    //Get all the SkLevels using the Service's "getAllSklevels()" function
    @GetMapping("sklevels/")
    public ResponseEntity<Iterable<SkLevel>> getAllsklevels() {
        return new ResponseEntity<>(this.skLevelService.getAllSklevels(),
                HttpStatus.OK);
    }
    //Delete an SkLevel by is ID using the Service's "deleteSklevelById()" function
    @DeleteMapping("sklevel/{id}")
    public ResponseEntity<Void> deleteSklevelById(@PathVariable Long id) {
        this.skLevelService.deleteSklevelById(id);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

}
