require 'bundler'
Bundler.require

class SimpleApp < Sinatra::Base

	set :static, true
	set :public, 'public'

	get '/' do
		haml :home, :layout => false
	end
end

