package com.visa.vttp.day36server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.visa.vttp.day36server.models.BookDetails;
import com.visa.vttp.day36server.models.BookSummary;
import com.visa.vttp.day36server.services.BookService;

import jakarta.json.Json;
import jakarta.json.JsonArrayBuilder;

@RestController
@RequestMapping(path = { "/api/books" }, produces = MediaType.APPLICATION_JSON_VALUE)
public class BookController {

    private BookService bSvc;

    @Autowired
    BookController(BookService bSvc) {
        this.bSvc = bSvc;
    }

    @GetMapping
    public ResponseEntity<String> getBooks(
            @RequestParam(defaultValue = "20") Integer limit,
            @RequestParam(defaultValue = "0") Integer offset) {
        List<BookSummary> summaries = bSvc.search(limit, offset);

        JsonArrayBuilder arrBldr = Json.createArrayBuilder();
        summaries.stream().forEach((BookSummary x) -> {
            arrBldr.add(x.toJson());
        });

        return ResponseEntity.ok(arrBldr.build().toString());
    }

    @GetMapping(path = "/{bookId}")
    public ResponseEntity<String> getBookByID(@PathVariable String bookId) {
        BookDetails bd = bSvc.getBookByID(bookId);
        return ResponseEntity.ok(bd.toJson().toString());

    }

}
