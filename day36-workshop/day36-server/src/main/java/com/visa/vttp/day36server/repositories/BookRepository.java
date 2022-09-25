package com.visa.vttp.day36server.repositories;

import java.sql.SQLDataException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import com.visa.vttp.day36server.models.BookDetails;
import com.visa.vttp.day36server.models.BookSummary;

@Repository
public class BookRepository {

    private static final String SQL_GET_BOOKS = "select book_id, title from book2018 order by title asc limit ? offset ?;";
    private static final String SQL_GET_BOOK_BY_ID = "select * from book2018 where book_id = ?;";
    private JdbcTemplate template;

    @Autowired
    BookRepository(JdbcTemplate template) {
        this.template = template;
    }

    public List<BookSummary> getBooks(Integer limit, Integer offset) {

        List<BookSummary> summaries = new ArrayList<>();

        SqlRowSet rs = template.queryForRowSet(SQL_GET_BOOKS, limit, offset);
        while (rs.next()) {
            BookSummary bs = BookSummary.create(rs);
            summaries.add(bs);
        }

        return summaries;
    }

    public BookDetails getBookByID(String ID) {
        SqlRowSet rs = template.queryForRowSet(SQL_GET_BOOK_BY_ID, ID);
        if (rs.next()) {
            return BookDetails.create(rs);
        }
        throw new RuntimeException("No such record with book_id: " + ID);
    }

}
