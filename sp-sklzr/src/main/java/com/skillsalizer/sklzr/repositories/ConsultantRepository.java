package com.skillsalizer.sklzr.repositories;

import com.skillsalizer.sklzr.entities.Consultant;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConsultantRepository extends CrudRepository<Consultant, Long> {
}
