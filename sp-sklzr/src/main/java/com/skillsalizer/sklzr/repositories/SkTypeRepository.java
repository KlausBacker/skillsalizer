package com.skillsalizer.sklzr.repositories;

import com.skillsalizer.sklzr.entities.SkType;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkTypeRepository extends CrudRepository<SkType, Long> {
}
