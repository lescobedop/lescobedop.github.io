source 'https://rubygems.org'

gem 'jekyll', '~> 4.3.2'

# Core Jekyll Plugins (from al-folio)
group :jekyll_plugins do
  gem 'jekyll-archives'
  gem 'jekyll-email-protect'
  gem 'jekyll-feed'
  gem 'jekyll-get-json'
  gem 'jekyll-link-attributes'
  gem 'jekyll-minifier'
  gem 'jekyll-paginate-v2'
  gem 'jekyll-regex-replace'
  gem 'jekyll-scholar'
  gem 'jekyll-sitemap'
  gem 'jekyll-tabs'
  gem 'jekyll-toc'
  gem 'jekyll-twitter-plugin'
  gem 'jemoji'
  
  # Essential: Fixes Sass issues
  gem 'jekyll-sass-converter', '~> 3.0'
  
  # Content categorization
  gem 'classifier-reborn'
end

# External Data Fetching & Processing
group :other_plugins do
  gem 'css_parser'
  gem 'feedjira'
  gem 'httparty'
  gem 'observer'  # Needed by jekyll-scholar
  gem 'ostruct'   # Needed by jekyll-twitter-plugin
  gem 'terser'    # Used for JS minification
end

# Sass Fix: Forces Dart Sass instead of `sass-embedded`
group :sass do
  gem 'sassc'
end

gem "jekyll-jupyter-notebook", "~> 0.0.6"

gem "jekyll-terser", "~> 0.2.3", git: "https://github.com/RobertoJBeltran/jekyll-terser.git"
