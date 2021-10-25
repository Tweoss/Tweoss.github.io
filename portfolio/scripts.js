$(document).ready(function() {
    // fetch portfolio.json
    $.getJSON("portfolio.json", function(data) {
        // function to append each card and modal to the DOM
        let apply = (col_num, col_data) => {
            console.log(col_data)
            $.each(col_data, function(i, item) {
                $("#cards-section").append(`
                    <div class="modal" id="modal-${i}-col-${col_num}">
                        <img src="${item.modal.img}" alt="${item.modal.img_alt}">
                        <h2>${item.modal.title}</h2>
                        <p>${item.modal.description}</p>
                        <a href="${item.modal.link}" target="_blank" rel="noopener noreferrer" class="link">View Project</a>
                    </div>
                `)
                $("#portfolio-col-" + col_num).append(`
                    <div class="card" data-modal="modal-${i}-col-${col_num}">
                        <img src="${item.card.img}" alt="${item.card.img_alt}">
                        <div class="card__title">${item.card.title}</div>
                        <div class="card__description">${item.card.description}</div>
                    </div>
                `)
            });
        };
        // apply data to DOM
        apply(1, data.col_1);
        apply(2, data.col_2);
    })
})

// $(document).on('click', '.card', function() {
//     openModal($(this).data("modal"));
// });

// function openModal(modal) {
//     $(".modal-backdrop").addClass('show');
//     var whichModal = $("#" + modal);
//     whichModal.addClass('show');
// }

// $(document).on('click', '.modal-backdrop', function() {
//     $(this).removeClass('show');
//     $(".modal").removeClass('show');
// });

// $(document).on('keydown', function(e) {
//     var key = e.keyCode;
//     if (key == 27) {
//         $(".modal-backdrop").removeClass('show');
//         $(".modal").removeClass('show');
//     }
// });

$(document).on('click', '.card', function() {
    openModal($(this).data("modal"));
});

function openModal(modal) {
    $(".modal-backdrop").addClass('show');
    var whichModal = $("#" + modal);
    whichModal.addClass('show');
    $("body").addClass("no-scroll");
}

$(document).on('click', '.modal-backdrop', function() {
    $(this).removeClass('show');
    $(".modal").removeClass('show');
    $("body").removeClass("no-scroll");
});

$(document).on('keydown', function(e) {
    var key = e.keyCode;
    if (key == 27) {
        $(".modal-backdrop").removeClass('show');
        $(".modal").removeClass('show');
        $("body").removeClass("no-scroll");
    }
});