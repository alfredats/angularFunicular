package com.visa.vttp.day36server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.visa.vttp.day36server.models.BookDetails;
import com.visa.vttp.day36server.models.BookSummary;
import com.visa.vttp.day36server.repositories.BookRepository;

@Service
public class BookService {

    private BookRepository bookRepo;

    @Autowired
    BookService(BookRepository bookRepo) {
        this.bookRepo = bookRepo;
    }

    public List<BookSummary> search(Integer limit, Integer offset) {
        return bookRepo.getBooks(limit, offset);
    }

    public BookDetails getBookByID(String ID) {
        return bookRepo.getBookByID(ID);
    }

}
