
$(document).ready(function() {
    const container = $('.js-results');

    $.get("../darudeFile.txt", function(data, status) {
        const { resultCount, results } = JSON.parse(data);

        const row = $('<div>').addClass('row row-cols-1 row-cols-md-4 g-4');

        $.each(results, function(index, result) {
            const { collectionName, artworkUrl60, artworkUrl100 } = result;

            if (artworkUrl100) {
                const col = $('<div>').addClass('col');
                const img = $('<img>').addClass('img-fluid');
                const albumName = $('<div>').text(collectionName);

                img.attr('src', artworkUrl100.replace("100x100bb", "1024x1024bb"));
                img.addClass('m-1');
                
                col.append(img);
                col.append(albumName);
                row.append(col);
            }
        });

        container.append(row);
    });
});