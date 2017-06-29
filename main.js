
$("select").change( function() {
  console.log($(this).val());
  let selectedUser = $(this).val();
// Without promises, we kick off the chain of events, but have to navigate from file to file to see what happens next
  SongFaves.UserFactory.getUsers(selectedUser)
})
