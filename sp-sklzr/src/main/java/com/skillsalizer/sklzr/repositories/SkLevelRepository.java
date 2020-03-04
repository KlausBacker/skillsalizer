package com.skillsalizer.sklzr.repositories;

import com.skillsalizer.sklzr.entities.SkLevel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkLevelRepository extends CrudRepository<SkLevel, Long> {
}
