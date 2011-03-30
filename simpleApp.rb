require 'bundler'
Bundler.require

class SimpleApp < Sinatra::Base
	get '/' do
		haml :home, :layout => false
	end
end

