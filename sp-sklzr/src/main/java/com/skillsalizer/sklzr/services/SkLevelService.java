package com.skillsalizer.sklzr.services;

import com.skillsalizer.sklzr.entities.SkLevel;
import com.skillsalizer.sklzr.repositories.SkLevelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SkLevelService {
    public SkLevelRepository skLevelRepository;

    @Autowired
    public SkLevelService(SkLevelRepository skLevelRepository){
        this.skLevelRepository=skLevelRepository;
    }

    //persist a new SkLevel using the Repository's "save()" function
    public <L extends SkLevel> L saveSklevel(L l) {
        return skLevelRepository.save(l);
    }
    //Update an SkLevel using the Repository's "save()" function
    public <L extends SkLevel> L updateSklevel(L l) {
        return skLevelRepository.save(l);
    }
    // Get an SkLevel by is ID using the Repository's "findById()" function
    public Optional<SkLevel> getSklevelById(Long aLong) {
        return skLevelRepository.findById(aLong);
    }
    //Get all the SkLevels using the Repository's "findAll()" function
    public Iterable<SkLevel> getAllSklevels() {
        return skLevelRepository.findAll();
    }
    // Delete an SkLevel by is ID using the Repository's "deleteById()" function
    public void deleteSklevelById(Long aLong) {
        skLevelRepository.deleteById(aLong);
    }


    //Generated but Not Used functions

//    public <L extends SkLevel> Iterable<L> saveAllSklevel(Iterable<L> iterable) {
//        return skLevelRepository.saveAll(iterable);
//    }
//    public boolean existsSklevelById(Long aLong) {
//        return skLevelRepository.existsById(aLong);
//    }
//    public Iterable<SkLevel> findAllSklevelById(Iterable<Long> iterable) {
//        return skLevelRepository.findAllById(iterable);
//    }
//    public long countSklevel() {
//        return skLevelRepository.count();
//    }
//    public void deleteSklevel(SkLevel skLevel) {
//        skLevelRepository.delete(skLevel);
//    }
//    public void deleteAllSklevel(Iterable<? extends SkLevel> iterable) {
//        skLevelRepository.deleteAll(iterable);
//    }
//    public void deleteAllSklevel() {
//        skLevelRepository.deleteAll();
//    }
}
