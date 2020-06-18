export const Note = {
  author: (parent, args, ctx) =>
    ctx.db.users.find(user => user.id === parent.authorId),
};

export const NoteQuries = {
  notes: (parent, args, ctx) => ctx.db.notes,
};

