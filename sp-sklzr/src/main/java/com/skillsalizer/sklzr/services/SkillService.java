package com.skillsalizer.sklzr.services;

import com.skillsalizer.sklzr.entities.Skill;
import com.skillsalizer.sklzr.repositories.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SkillService {
    public SkillRepository skillRepository;

    @Autowired
    public SkillService(SkillRepository skillRepository){
        this.skillRepository= skillRepository;
    }

    //persist a new Skill using the Repository's "save()" function
    public <S extends Skill> S saveSkill(S s) {
        return skillRepository.save(s);
    }
    //Update an Skill using the Repository's "save()" function
    public <S extends Skill> S updateSkill(S s) {
        return skillRepository.save(s);
    }
    // Get an Skill by is ID using the Repository's "findById()" function
    public Optional<Skill> getSkillById(Long aLong) {
        return skillRepository.findById(aLong);
    }
    //Get all the SkSkills using the Repository's "findAll()" function
    public Iterable<Skill> getAllSkills() {
        return skillRepository.findAll();
    }
    // Delete an Skill by is ID using the Repository's "deleteById()" function
    public void deleteSkillById(Long aLong) {
        skillRepository.deleteById(aLong);
    }


    //Generated but Not Used functions

//    public <S extends Skill> Iterable<S> saveAllSkill(Iterable<S> iterable) {
//        return skillRepository.saveAll(iterable);
//    }
//    public boolean existsSkillById(Long aLong) {
//        return skillRepository.existsById(aLong);
//    }
//    public Iterable<Skill> findAllSkillById(Iterable<Long> iterable) {
//        return skillRepository.findAllById(iterable);
//    }
//    public long countSkill() {
//        return skillRepository.count();
//    }
//    public void deleteSkill(Skill skill) {
//        skillRepository.delete(skill);
//    }
//    public void deleteAllSkill(Iterable<? extends Skill> iterable) {
//        skillRepository.deleteAll(iterable);
//    }
//    public void deleteAllSkill() {
//        skillRepository.deleteAll();
//    }
}
