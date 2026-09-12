
export default function YourForm() {
    return (
      <form
        id="wd-your-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label htmlFor="wd-first-name">First Name:</label>
        <input placeholder="Maya" id="wd-first-name" /> <br />
        <label htmlFor="wd-last-name">Last Name:</label>
        <input placeholder="Robie" id="wd-last-name" /> <br />
        <label>Why am I taking this course?</label>
        <br />
        <textarea
          id="wd-short-bio"
          cols={40}
          rows={10}
          defaultValue="I'm taking this course to learn how to design and build websites that are accessible to all users while also being visually interesting and engaging."
        />
        <br />
        <label>Class Standing:</label>
        <br />
        <input type="radio" name="radio-class" id="wd-radio-freshman" />
        <label htmlFor="wd-radio-freshman">Freshman</label>
        <br />
        <input type="radio" name="radio-class" id="wd-radio-sophomore" />
        <label htmlFor="wd-radio-sophomore">Sophomore</label>
        <br />
        <input type="radio" name="radio-class" id="wd-radio-junior" />
        <label htmlFor="wd-radio-junior">Junior</label>
        <br />
        <input type="radio" name="radio-class" id="wd-radio-senior" />
        <label htmlFor="wd-radio-senior">Senior</label>
        <br />
        <label>Gender:</label>
        <br />
        <input type="radio" name="radio-gender" id="wd-checkbox-male" />
        <label htmlFor="wd-checkbox-male">Male</label>
        <br />
        <input type="radio" name="radio-gender" id="wd-checkbox-female" />
        <label htmlFor="wd-checkbox-female">Female</label>
        <br />
        <input type="radio" name="radio-gender" id="wd-checkbox-other" />
        <label htmlFor="wd-checkbox-other">Prefer not to say</label>
        <br />
        <label>Familiar programming languages:</label>
        <br />
        <input type="checkbox" name="check-language" id="wd-chkbox-python" />
        <label htmlFor="wd-chkbox-python">Python</label>
        <br />
        <input type="checkbox" name="check-language" id="wd-chkbox-java" />
        <label htmlFor="wd-chkbox-java">Java</label>
        <br />
        <input type="checkbox" name="check-language" id="wd-chkbox-cpp" />
        <label htmlFor="wd-chkbox-cpp">C++</label>
        <br />
        <input type="checkbox" name="check-language" id="wd-chkbox-js" />
        <label htmlFor="wd-chkbox-js">JavaScript</label>
        <br />
        <label htmlFor="wd-select-one-major">Major: </label>
        <br />
        <select id="wd-select-one-major" defaultValue="cs">
          <option value="cs">Computer Science</option>
          <option value="data">Data Science</option>
          <option value="business">Business</option>
          <option value="undeclared">Undeclared</option>
        </select>
        <br />
        <label htmlFor="wd-select-many-topics">
          Topics you&apos;d like to focus on this term (select all that
          apply):{" "}
        </label>
        <br />
        <select
          multiple
          id="wd-select-many-topics"
          defaultValue={["structure", "visual"]}
        >
          <option value="structure">Site structure</option>
          <option value="visual">Visual Design</option>
          <option value="accessibility">Accessibility</option>
          <option value="forms">Forms</option>
        </select>
        <br />
        <label htmlFor="wd-text-fields-school-email">School email: </label>
        <input
          type="email"
          placeholder="robie.ma@northeastern.edu"
          id="wd-text-fields-school-email"
        />
        <br />
        <label htmlFor="wd-text-fields-grad">Expected graduation year: </label>
        <input
          type="number"
          defaultValue="2027"
          placeholder="2027"
          min={2026}
          max={2032}
          id="wd-text-fields-grad"
        />
        <br />
        <label htmlFor="wd-text-fields-birth">Birthday: </label>
        <input
          type="date"
          defaultValue="2004-09-08"
          min="1900-01-01"
          max="2025-12-31"
          id="wd-text-fields-birth"
        />
        <br />
        <label htmlFor="wd-text-fields-excitement">
          How excited you are about the course (0-10):{" "}
        </label>
        <input
          type="range"
          defaultValue="10"
          min="0"
          max="10"
          id="wd-text-fields-excitement"
        />
        <br />
        <button id="wd-save" type="submit">
          Save
        </button>
        <button id="wd-cancel" type="button">
          Cancel
        </button>
      </form>
    );
}
