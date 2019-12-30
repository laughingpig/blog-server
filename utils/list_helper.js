const dummy = (blogs) => {
  return 1;
}

const totalLikes = (list) => {
  const reducer = (likes,item) => {
    return likes+item.likes
  }
  
  return list.reduce(reducer, 0)
}

const favoriteBlog = (list) => {
  let highest = {};

  list.map(item => {
    if ((item.likes > highest.likes) || highest.likes === undefined) {
      highest = item
    }
  })
  return highest
}

const mostBlogs = list => {
  let authors = []

  list.map(item => {
    const foundAuth = authors.find(auth => auth.author === item.author);
    if (foundAuth) {
      const newauth = {
        author: item.author,
        blogs: foundAuth.blogs+1
      }

      authors[authors.findIndex(auth => auth.author === item.author)] = newauth
    }
    else {
      const newauth = {
        author: item.author,
        blogs: 1
      }
      authors.push(newauth);      
    }
  })

  let highest = {};

  authors.map(item => {
    if ((item.blogs > highest.blogs) || highest.blogs === undefined) {
      highest = item
    }
  })
  return highest  
}

const mostLikes = list => {
  let authors = []

  list.map(item => {
    const foundAuth = authors.find(auth => auth.author === item.author);
    if (foundAuth) {
      const newauth = {
        author: item.author,
        likes: foundAuth.likes+item.likes
      }

      authors[authors.findIndex(auth => auth.author === item.author)] = newauth
    }
    else {
      const newauth = {
        author: item.author,
        likes: item.likes
      }
      authors.push(newauth);      
    }
  })

  let highest = {};

  authors.map(item => {
    if ((item.likes > highest.likes) || highest.likes === undefined) {
      highest = item
    }
  })
  return highest  
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}
