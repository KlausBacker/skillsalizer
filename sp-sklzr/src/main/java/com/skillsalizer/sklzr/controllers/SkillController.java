package com.skillsalizer.sklzr.controllers;

import com.skillsalizer.sklzr.entities.Skill;
import com.skillsalizer.sklzr.services.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class SkillController {
    private SkillService skLevelService;

    @Autowired
    public SkillController(SkillService skLevelService) {
        this.skLevelService = skLevelService;
    }

    //persist a new Skill using the Service's "saveSkill()" function
    @PostMapping("skill")
    public ResponseEntity<Skill> postSkill(@RequestBody Skill s) {
        return new ResponseEntity<>(this.skLevelService.saveSkill(s),
                HttpStatus.CREATED);
    }

    //Update an Skill using the Service's "updateSkill()" function
    @PutMapping("skill/{id}")
    public ResponseEntity<Skill> updateSkill(@RequestBody Skill s) {
        return new ResponseEntity<>(this.skLevelService.updateSkill(s),
                HttpStatus.OK);
    }

    //Get an Skill by is ID using the Service's "getSkillById()" function
    @GetMapping("skill/{id}")
    public ResponseEntity<Skill> getSkillById(@PathVariable Long id) {
        return new ResponseEntity<>(this.skLevelService.getSkillById(id).orElse(null),
                HttpStatus.OK);
    }

    //Get all the Skills using the Service's "getAllSkills()" function
    @GetMapping("skills/")
    public ResponseEntity<Iterable<Skill>> getAllskills() {
        return new ResponseEntity<>(this.skLevelService.getAllSkills(),
                HttpStatus.OK);
    }

    //Delete a Skill by is ID using the Service's "deleteSkillById()" function
    @DeleteMapping("skill/{id}")
    public ResponseEntity<Void> deleteSkillById(@PathVariable Long id) {
        this.skLevelService.deleteSkillById(id);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

}
