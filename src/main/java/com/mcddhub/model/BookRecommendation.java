package com.mcddhub.model;

public record BookRecommendation(
        String title,
        String author,
        int publicationYear,
        String genre,
        int pageCount,
        String summary
) {
}
