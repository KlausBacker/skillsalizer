package com.skillsalizer.sklzr.services;

import com.skillsalizer.sklzr.entities.Consultant;
//import com.skillsalizer.sklzr.exception.ApiException;
//import com.skillsalizer.sklzr.exception.ApiRequestException;
import com.skillsalizer.sklzr.repositories.ConsultantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ConsultantService {
    public ConsultantRepository consultantRepository;

    @Autowired
    public ConsultantService(ConsultantRepository consultantRepository) {
        this.consultantRepository = consultantRepository;
    }

    //persist a new Consultant using the Repository's "save()" function
    public <C extends Consultant> C saveConsultant(C c) {
        return consultantRepository.save(c);
    }

    //Update an Consultant using the Repository's "save()" function
    public <C extends Consultant> C updateConsultant(C c) {
        return consultantRepository.save(c);
    }

    // Get an Consultant by is ID using the Repository's "findById()" function
    public Optional<Consultant> getConsultantById(Long aLong) {
        return consultantRepository.findById(aLong);
    }

    //Get all the SkConsultants using the Repository's "findAll()" function
    public Iterable<Consultant> getAllConsultants() {
        return consultantRepository.findAll();
    }

    // Delete an Consultant by is ID using the Repository's "deleteById()" function
    public void deleteConsultantById(Long aLong) {
        consultantRepository.deleteById(aLong);
    }


    //Generated but Not Used functions

//    public <C extends Consultant> Iterable<C> saveAllConsultant(Iterable<C> iterable) {
//        return consultantRepository.saveAll(iterable);
//    }
//    public boolean existsConsultantById(Long aLong) {
//        return consultantRepository.existsById(aLong);
//    }
//    public Iterable<Consultant> findAllConsultantById(Iterable<Long> iterable) {
//        return consultantRepository.findAllById(iterable);
//    }
//    public long countConsultant() {
//        return consultantRepository.count();
//    }
//    public void deleteConsultant(Consultant consultant) {
//        consultantRepository.delete(consultant);
//    }
//    public void deleteAllConsultant(Iterable<? extends Consultant> iterable) {
//        consultantRepository.deleteAll(iterable);
//    }
//    public void deleteAllConsultant() {
//        consultantRepository.deleteAll();
//    }
}
