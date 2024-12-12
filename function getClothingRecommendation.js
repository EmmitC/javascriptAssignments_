function getClothingRecommendation(temp) {
    if (temp < 10) {
        return "Wear a heavy coat";
    } else if (temp >= 10 && temp <= 20) {
        return "Wear a jacket";
    } else {
        return "Wear a t-shirt";
    }
}
