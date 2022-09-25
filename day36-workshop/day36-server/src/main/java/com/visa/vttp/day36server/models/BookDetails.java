package com.visa.vttp.day36server.models;

import org.springframework.jdbc.support.rowset.SqlRowSet;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.json.JsonObjectBuilder;

public class BookDetails {
    private String book_id;
    private String title;
    private String authors;
    private String description;
    private String edition;
    private String format;
    private String pages;
    private String rating;
    private String rating_count;
    private String review_count;
    private String genres;
    private String image_url;

    public String getBook_id() {
        return book_id;
    }

    public void setBook_id(String book_id) {
        this.book_id = book_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthors() {
        return authors;
    }

    public void setAuthors(String authors) {
        this.authors = authors;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getEdition() {
        return edition;
    }

    public void setEdition(String edition) {
        this.edition = edition;
    }

    public String getFormat() {
        return format;
    }

    public void setFormat(String format) {
        this.format = format;
    }

    public String getPages() {
        return pages;
    }

    public void setPages(String pages) {
        this.pages = pages;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public String getRating_count() {
        return rating_count;
    }

    public void setRating_count(String rating_count) {
        this.rating_count = rating_count;
    }

    public String getReview_count() {
        return review_count;
    }

    public void setReview_count(String review_count) {
        this.review_count = review_count;
    }

    public String getGenres() {
        return genres;
    }

    public void setGenres(String genres) {
        this.genres = genres;
    }

    public String getImage_url() {
        return image_url;
    }

    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }

    public static BookDetails create(SqlRowSet rs) {
        BookDetails bd = new BookDetails();
        bd.setBook_id(rs.getString("book_id"));
        bd.setTitle(rs.getString("title"));
        bd.setAuthors(rs.getString("authors"));
        bd.setDescription(rs.getString("description"));
        bd.setEdition(rs.getString("edition"));
        bd.setFormat(rs.getString("format"));
        bd.setPages(rs.getString("pages"));
        bd.setRating(rs.getString("rating"));
        bd.setRating_count(rs.getString("rating_count"));
        bd.setReview_count(rs.getString("review_count"));
        bd.setGenres(rs.getString("genres"));
        bd.setImage_url(rs.getString("image_url"));
        return bd;
    }

    public JsonObject toJson() {
        return Json.createObjectBuilder()
                .add("book_id", book_id)
                .add("title", title)
                .add("authors", authors)
                .add("description", description)
                .add("edition", edition)
                .add("format", format)
                .add("pages", pages)
                .add("rating", rating)
                .add("rating_count", rating_count)
                .add("review_count", review_count)
                .add("genres", genres)
                .add("image_url", image_url)
                .build();
    }
}
