package com.skillsalizer.sklzr.services;

import com.skillsalizer.sklzr.entities.SkType;
import com.skillsalizer.sklzr.repositories.SkTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SkTypeService {
    public SkTypeRepository skTypeRepository;

    @Autowired
    public SkTypeService(SkTypeRepository skTypeRepository){
        this.skTypeRepository= skTypeRepository;
    }

    //persist a new SkType using the Repository's "save()" function
    public <T extends SkType> T saveSktype(T t) {
        return skTypeRepository.save(t);
    }
    //Update an SkType using the Repository's "save()" function
    public <T extends SkType> T updateSktype(T t) {
        return skTypeRepository.save(t);
    }
    // Get an SkType by is ID using the Repository's "findById()" function
    public Optional<SkType> getSktypeById(Long aLong) {
        return skTypeRepository.findById(aLong);
    }
    //Get all the SkTypes using the Repository's "findAll()" function
    public Iterable<SkType> getAllSktypes() {
        return skTypeRepository.findAll();
    }
    // Delete an SkType by is ID using the Repository's "deleteById()" function
    public void deleteSktypeById(Long aLong) {
        skTypeRepository.deleteById(aLong);
    }


    //Generated but Not Used functions

//    public <T extends SkType> Iterable<T> saveAllSktype(Iterable<T> iterable) {
//        return skTypeRepository.saveAll(iterable);
//    }
//    public boolean existsSktypeById(Long aLong) {
//        return skTypeRepository.existsById(aLong);
//    }
//    public Iterable<SkType> findAllSktypeById(Iterable<Long> iterable) {
//        return skTypeRepository.findAllById(iterable);
//    }
//    public long countSktype() {
//        return skTypeRepository.count();
//    }
//    public void deleteSktype(SkType skType) {
//        skTypeRepository.delete(skType);
//    }
//    public void deleteAllSktype(Iterable<? extends SkType> iterable) {
//        skTypeRepository.deleteAll(iterable);
//    }
//    public void deleteAllSktype() {
//        skTypeRepository.deleteAll();
//    }
}

