function Protected() {
  return (
    <>
      <div className="tab-content pt-2">
        <div
          className="tab-pane fade profile-overview active show"
          id="profile-overview"
          role="tabpanel"
        >
          <h5 className="card-title">About</h5>
          <p className="small fst-italic">
            Sunt est soluta temporibus accusantium neque nam maiores cumque
            temporibus. Tempora libero non est unde veniam est qui dolor. Ut
            sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga
            sequi sed ea saepe at unde.
          </p>

          <h5 className="card-title">Profile Details</h5>

          <div className="row">
            <div className="col-lg-3 col-md-4 label ">Full Name</div>
            <div className="col-lg-9 col-md-8">Kevin Anderson</div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-4 label">Company</div>
            <div className="col-lg-9 col-md-8">
              Lueilwitz, Wisoky and Leuschke
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-4 label">Job</div>
            <div className="col-lg-9 col-md-8">Web Designer</div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-4 label">Country</div>
            <div className="col-lg-9 col-md-8">USA</div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-4 label">Address</div>
            <div className="col-lg-9 col-md-8">
              A108 Adam Street, New York, NY 535022
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-4 label">Phone</div>
            <div className="col-lg-9 col-md-8">(436) 486-3538 x29071</div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-4 label">Email</div>
            <div className="col-lg-9 col-md-8">k.anderson@example.com</div>
          </div>
        </div>

        <div
          className="tab-pane fade profile-edit pt-3"
          id="profile-edit"
          role="tabpanel"
        >
          <form>
            <div className="row mb-3">
              <label
                htmlFor="fullName"
                className="col-md-4 col-lg-3 col-form-label"
              >
                Full Name
              </label>
              <div className="col-md-8 col-lg-9">
                <input
                  name="fullName"
                  type="text"
                  className="form-control"
                  id="fullName"
                  value="Kevin Anderson"
                  readOnly
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="about"
                className="col-md-4 col-lg-3 col-form-label"
              >
                About
              </label>
              <div className="col-md-8 col-lg-9">
                <textarea
                  name="about"
                  className="form-control"
                  id="about"
                  style={{ height: "100px" }}
                  defaultValue={`Sunt est soluta temporibus accusantium neque nam maiores
                  cumque temporibus. Tempora libero non est unde veniam est qui
                  dolor. Ut sunt iure rerum quae quisquam autem eveniet
                  perspiciatis odit. Fuga sequi sed ea saepe at unde.`}
                >
                </textarea>
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="company"
                className="col-md-4 col-lg-3 col-form-label"
              >
                Company
              </label>
              <div className="col-md-8 col-lg-9">
                <input
                  name="company"
                  type="text"
                  className="form-control"
                  id="company"
                  value="Lueilwitz, Wisoky and Leuschke"
                  readOnly
                />
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="Job" className="col-md-4 col-lg-3 col-form-label">
                Job
              </label>
              <div className="col-md-8 col-lg-9">
                <input
                  name="job"
                  type="text"
                  className="form-control"
                  id="Job"
                  value="Web Designer"
                  readOnly
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="Country"
                className="col-md-4 col-lg-3 col-form-label"
              >
                Country
              </label>
              <div className="col-md-8 col-lg-9">
                <input
                  name="country"
                  type="text"
                  className="form-control"
                  id="Country"
                  value="USA"
                  readOnly
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="Address"
                className="col-md-4 col-lg-3 col-form-label"
              >
                Address
              </label>
              <div className="col-md-8 col-lg-9">
                <input
                  name="address"
                  type="text"
                  className="form-control"
                  id="Address"
                  value="A108 Adam Street, New York, NY 535022"
                  readOnly
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="Phone"
                className="col-md-4 col-lg-3 col-form-label"
              >
                Phone
              </label>
              <div className="col-md-8 col-lg-9">
                <input
                  name="phone"
                  type="text"
                  className="form-control"
                  id="Phone"
                  value="(436) 486-3538 x29071"
                  readOnly
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="Email"
                className="col-md-4 col-lg-3 col-form-label"
              >
                Email
              </label>
              <div className="col-md-8 col-lg-9">
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="Email"
                  value="k.anderson@example.com"
                  readOnly
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="Twitter"
                className="col-md-4 col-lg-3 col-form-label"
              >
                Twitter Profile
              </label>
              <div className="col-md-8 col-lg-9">
                <input
                  name="twitter"
                  type="text"
                  className="form-control"
                  id="Twitter"
                  value="https://twitter.com/#"
                  readOnly
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="Facebook"
                className="col-md-4 col-lg-3 col-form-label"
              >
                Facebook Profile
              </label>
              <div className="col-md-8 col-lg-9">
                <input
                  name="facebook"
                  type="text"
                  className="form-control"
                  id="Facebook"
                  value="https://facebook.com/#"
                  readOnly
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="Instagram"
                className="col-md-4 col-lg-3 col-form-label"
              >
                Instagram Profile
              </label>
              <div className="col-md-8 col-lg-9">
                <input
                  name="instagram"
                  type="text"
                  className="form-control"
                  id="Instagram"
                  value="https://instagram.com/#"
                  readOnly
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="Linkedin"
                className="col-md-4 col-lg-3 col-form-label"
              >
                Linkedin Profile
              </label>
              <div className="col-md-8 col-lg-9">
                <input
                  name="linkedin"
                  type="text"
                  className="form-control"
                  id="Linkedin"
                  value="https://linkedin.com/#"
                  readOnly
                />
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        </div>

        <div
          className="tab-pane fade pt-3"
          id="profile-settings"
          role="tabpanel"
        >
          <form>
            <div className="row mb-3">
              <label
                htmlFor="fullName"
                className="col-md-4 col-lg-3 col-form-label"
              >
                Email Notifications
              </label>
              <div className="col-md-8 col-lg-9">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="changesMade"
                    checked=""
                    readOnly
                  />
                  <label className="form-check-label" htmlFor="changesMade">
                    Changes made to your account
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="newProducts"
                    checked=""
                    readOnly
                  />
                  <label className="form-check-label" htmlFor="newProducts">
                    Information on new products and services
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="proOffers"
                    readOnly
                  />
                  <label className="form-check-label" htmlFor="proOffers">
                    Marketing and promo offers
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="securityNotify"
                    checked=""
                    disabled=""
                    readOnly
                  />
                  <label className="form-check-label" htmlFor="securityNotify">
                    Security alerts
                  </label>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        </div>

        <div
          className="tab-pane fade pt-3"
          id="profile-change-password"
          role="tabpanel"
        >
          <form>
            <div className="row mb-3">
              <label
                htmlFor="currentPassword"
                className="col-md-4 col-lg-3 col-form-label"
              >
                Current Password
              </label>
              <div className="col-md-8 col-lg-9">
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="currentPassword"
                  readOnly
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="newPassword"
                className="col-md-4 col-lg-3 col-form-label"
              >
                New Password
              </label>
              <div className="col-md-8 col-lg-9">
                <input
                  name="newpassword"
                  type="password"
                  className="form-control"
                  id="newPassword"
                  readOnly
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="renewPassword"
                className="col-md-4 col-lg-3 col-form-label"
              >
                Re-enter New Password
              </label>
              <div className="col-md-8 col-lg-9">
                <input
                  name="renewpassword"
                  type="password"
                  className="form-control"
                  id="renewPassword"
                  readOnly
                />
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Protected;
