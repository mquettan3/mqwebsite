#Marcus Quettan Site Development
----------
##Launching##
Clone the git repo and run "$meteor" from within the root directory

##Meteor Packages##

 - Router
	 -  **Flow-Router -** Routing
	 -  **Blaze-Layout** - Rendering content based on Route
	 -  **flow-router-helpers** - to support things like "PathFor" and Current Route
 - Accounts / Auth
	 - **alanning:roles** - For creation of roles
	 - **service-configuration** - For storing configurations for external auth
	 - **splendido:accounts-meld**- The meld (and emails field) package allow for workflow of multi-external auth services without duplicate users
	 -  **Account Packages ** - self-explanatory, meteor's account/auth support
 - Others
	 - **reactive-var and reactive-dict** - Use this in-lieu of Meteor's built in sessions (those are global).  TODO: Consider moving to reactive-state.
	 - **aldeed:collection2** - This supports the broader Mongo schemas
	 - **meteorchef:bert** - This allows for toast-like alerts
	 - **animate-css** - Allows class calls to animate css -- well known jquery package
