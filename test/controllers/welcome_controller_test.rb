require 'test_helper'

class WelcomeControllerTest < ActionDispatch::IntegrationTest
  test "should get view" do
    get welcome_view_url
    assert_response :success
  end

end
