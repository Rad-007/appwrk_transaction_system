

from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
db=SQLAlchemy()

class Transaction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, nullable=False, default=datetime.utcnow)
    description = db.Column(db.String(200), nullable=False)
    credit = db.Column(db.Float, default=0.0)
    debit = db.Column(db.Float, default=0.0)

    @property
    def running_balance(self):
        # Not stored; computed dynamically if needed
        return None

    def to_dict(self, running_balance=None):
        return {
            'id': self.id,
            'date': self.date.strftime('%Y-%m-%d'),
            'description': self.description,
            'credit': self.credit,
            'debit': self.debit,
            'running_balance': running_balance
        }