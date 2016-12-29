$(function() {
  $('#loadGitchesBtn').on('click', function() {
    $(this).prop('disabled', true);
    var getBullgitMembersPromise = new promisePromise(resolve => {
      $.ajax({
        url: 'https://bullg.it/members.json',
        success: function(data) {
          resolve(data);
        }
      });

    });

    getBullgitMembersPromise
        .then(response => {
          $('body').removeClass('error');
          $('body').addClass('success');
          $('#result').html(JSON.stringify(response, null, 2));
          $(this).prop('disabled', false);
        })
        .catch(error => {
          $('body').removeClass('success');
          $('body').addClass('error');
            $('#result').html(error);
            $(this).prop('disabled', false);
        });
  });
});
