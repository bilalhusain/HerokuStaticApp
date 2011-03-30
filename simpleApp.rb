require 'bundler'
Bundler.require

class SimpleApp < Sinatra::Base
	get '/' do
		haml :index, :layout => false
	end
end

