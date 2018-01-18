import React from 'react';
import PropTypes from 'prop-types';
import { Components, replaceComponent } from 'meteor/vulcan:core';
import { intlShape } from 'meteor/vulcan:i18n';
import EditIcon from 'material-ui-icons/Edit';


const EditButton = ({
                      collection,
                      document,
                      color = 'default',
                      fab,
                      triggerClasses,
                      buttonClasses,
                    }, { intl }) => (
  
  <Components.ModalTrigger
    classes={triggerClasses}
    component={<Components.TooltipIconButton titleId="datatable.edit"
                                             icon={<EditIcon/>}
                                             color={color}
                                             fab={fab}
                                             classes={buttonClasses}
    />}
  >
    <Components.DatatableEditForm collection={collection} document={document}/>
  </Components.ModalTrigger>
);


EditButton.propTypes = {
  collection: PropTypes.object.isRequired,
  document: PropTypes.object.isRequired,
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'contrast', 'accent']),
  fab: PropTypes.bool,
  triggerClasses: PropTypes.object,
  buttonClasses: PropTypes.object,
};


EditButton.contextTypes = {
  intl: intlShape
};


EditButton.displayName = 'EditButton';


replaceComponent('EditButton', EditButton);