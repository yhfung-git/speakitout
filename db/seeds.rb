# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "faker"

# Post
Post.destroy_all
puts "Posts destroyed"

50.times do
  posts = Post.create(
    title: Faker::Lorem.sentence(word_count: 3),
    content: Faker::Lorem.paragraph(sentence_count: 2),
    private: false,
    user_id: 1
  )
  posts.save!
end

puts "50 posts created"

# Article
Article.destroy_all
puts "Articles destroyed"

50.times do
  articles = Article.create(
    title: Faker::Lorem.sentence(word_count: 3),
    message: Faker::Lorem.paragraph_by_chars,
    url: Faker::LoremFlickr.image,
    user_id: 1
  )
  articles.save!
end

puts "50 articles created"
