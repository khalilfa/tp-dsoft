package com.dsoft.tpdsoft.repositories;

import com.dsoft.tpdsoft.model.Category;
import com.dsoft.tpdsoft.model.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MenuRepository extends JpaRepository<Menu, Integer> {
    List<Menu> findByCategoriesIn(Category category);
}
